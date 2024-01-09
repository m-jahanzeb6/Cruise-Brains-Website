import {useEffect} from "react";

export function DNITesting() {
    useEffect(() => {
        if (typeof document !== 'undefined') {
            const swapNumber = getCookie("swapNumberCookie");
            const number = getCookie("numberCookie");
            if (swapNumber && number) {
                const validityCookie = getCookie("validity");

                if (parseInt(validityCookie) === 3) {
                    const formattedNumbers = formatPhoneNumber(swapNumber);
                    replaceNumberOnResponse(formattedNumbers.format1, number);
                    replaceNumberOnResponse(formattedNumbers.format2, number);
                    replaceNumberOnResponse(formattedNumbers.format3, number);
                    replaceNumberOnResponse(formattedNumbers.format4, number);
                    replaceNumberOnResponse(formattedNumbers.format5, number);
                    replaceNumberOnResponse(formattedNumbers.format6, number);
                    replaceNumberOnResponse(formattedNumbers.format7, number);
                    replaceNumberOnResponse(formattedNumbers.format8, number);
                } else if (parseInt(validityCookie) === 1) {
                    fetchDataFromAPI(number);
                }
            } else {
                fetchDataFromAPI();
            }
        }
    }, []);

    const replaceNumberOnResponse = (regex, replacementNumber) => {
        const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        let currentNode;
        console.log(regex, replacementNumber)
        while ((currentNode = textNodes.nextNode())) {
            const originalText = currentNode.textContent;
            const modifiedText = originalText.replace(regex, replacementNumber);
            currentNode.textContent = modifiedText;
        }
    };

    const fetchDataFromAPI = (number = null) => {
        const dataToSend = {resource: window.location.href, callScalerNumber: number};

        fetch('https://corsproxy.io/?https://staging.callscaler.com/api/number/36/visitor', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataToSend),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then((textResponse) => {
                const responseObj = JSON.parse(textResponse);
                const number = responseObj.number.replace(/"/g, '');
                const swapNumber = responseObj.swapNumber.replace(/"/g, '');
                const validity = responseObj.validity;
                setCookie("swapNumberCookie", swapNumber, validity);
                setCookie("numberCookie", number, validity);
                setCookie("validity", validity, validity);

                const formattedNumbers = formatPhoneNumber(number);
                replaceNumberOnResponse(swapNumber, formattedNumbers.format1);
                replaceNumberOnResponse(swapNumber, formattedNumbers.format2);
                replaceNumberOnResponse(swapNumber, formattedNumbers.format3);
                replaceNumberOnResponse(swapNumber, formattedNumbers.format4);
                replaceNumberOnResponse(swapNumber, formattedNumbers.format5);
                replaceNumberOnResponse(swapNumber, formattedNumbers.format6);
                replaceNumberOnResponse(swapNumber, formattedNumbers.format7);
                replaceNumberOnResponse(swapNumber, formattedNumbers.format8);
            })
            .catch((error) => {
                console.error("Error in fetch: " + error.message);
            });
    };

    const setCookie = (name, value, days) => {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + days);
        document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    };

    const formatPhoneNumber = (phoneNumber) => {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            const formatted1 = `(${match[1]}) ${match[2]}-${match[3]}`;
            const formatted2 = `(${match[1]}) ${match[2]}-${match[3]}`;
            const formatted3 = `(${match[1]})-${match[2]}-${match[3]}`;
            const formatted4 = `(${match[1]}) ${match[2]} ${match[3]}`;
            const formatted5 = `${match[1]}-${match[2]}-${match[3]}`;
            const formatted6 = `${match[1]} ${match[2]}-${match[3]}`;
            const formatted7 = `${match[1]} ${match[2]} ${match[3]}`;
            return {
                format1: formatted1,
                format2: formatted2,
                format3: formatted3,
                format4: formatted4,
                format5: formatted5,
                format6: formatted6,
                format7: formatted7,
            };
        }
    };
    const getCookie = (name) => {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName.trim() === name) {
                return cookieValue;
            }
        }
        return null;
    };
}