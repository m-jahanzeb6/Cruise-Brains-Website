export function DNIScript() {
    document.addEventListener('DOMContentLoaded', function () {
        const swapNumber = getCookie("swapNumberCookie");
        const number = getCookie("numberCookie");
        if (swapNumber && number) {
            const validityCookie = getCookie("validity");
            if (parseInt(validityCookie) === 3) {
                replaceNumberOnResponse(swapNumber, number);
            } else if (parseInt(validityCookie) === 1) {
                fetchDataFromAPI(number);
            }
        } else {
            fetchDataFromAPI();
        }

        function replaceNumberOnResponse(regex, replacementNumber) {
            const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            let currentNode;
            while ((currentNode = textNodes.nextNode())) {
                const originalText = currentNode.textContent;
                const modifiedText = originalText.replace(regex, replacementNumber);
                currentNode.textContent = modifiedText;
            }
        }

        function fetchDataFromAPI(number = null) {
            const dataToSend = {resource: document.referrer, callScalerNumber: number};
            fetch('https://corsproxy.io/?https://staging.callscaler.com/api/number/36/visitor', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(dataToSend),
            }).then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            }).then((textResponse) => {
                const responseObj = JSON.parse(textResponse);
                const number = responseObj.number.replace(/"/g, '');
                const swapNumber = responseObj.swapNumber.replace(/"/g, '');
                const validity = responseObj.validity;
                setCookie("swapNumberCookie", swapNumber, validity);
                setCookie("numberCookie", number, validity);
                setCookie("validity", validity, validity);
                replaceNumberOnResponse(swapNumber, number);
            }).catch((error) => {
                console.error("Error in fetch: " + error.message);
            });
        }

        function setCookie(name, value, days) {
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + days);
            document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
        }

        function getCookie(name) {
            const cookies = document.cookie.split(';');
            for (const cookie of cookies) {
                const [cookieName, cookieValue] = cookie.split('=');
                if (cookieName.trim() === name) {
                    return cookieValue;
                }
            }
            return null;
        }
    })
}