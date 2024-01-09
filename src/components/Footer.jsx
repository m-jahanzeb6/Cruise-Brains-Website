import Link from 'next/link'

import {Container} from '@/components/Container'
import {useEffect} from "react";
import {DNITesting} from "@/lib/DNI";

function NavLink({href, children}) {
    return (
        <Link
            href={href}
            className="transition hover:text-teal-500 dark:hover:text-teal-400"
        >
            {children}
        </Link>
    )
}

export function Footer() {
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
        const formatted1 = `${phoneNumber.slice(2, 12)}`;
        const formatted2 = `${phoneNumber.slice(0, 12)}`;
        const formatted3 = `(${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 12)}`;
        const formatted4 = `(${phoneNumber.slice(2, 5)})-${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 12)}`;
        const formatted5 = `(${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 8)} ${phoneNumber.slice(8, 12)}`;
        const formatted6 = `${phoneNumber.slice(2, 5)}-${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 12)}`;
        const formatted7 = `${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 12)}`;
        const formatted8 = `${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5, 8)} ${phoneNumber.slice(8, 12)}`;

        return {
            format1: formatted1,
            format2: formatted2,
            format3: formatted3,
            format4: formatted4,
            format5: formatted5,
            format6: formatted6,
            format7: formatted7,
            format8: formatted8,
        };
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
    return (
        <footer className="mt-32">
            <Container.Outer>
                <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
                    <Container.Inner>
                        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                            <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/about">About</NavLink>
                                <NavLink href="/services">Services</NavLink>
                                <NavLink href="/jobs">Jobs</NavLink>
                                <NavLink href="/contact">Contact</NavLink>
                            </div>
                            <div className="text-sm text-zinc-400 flex dark:text-zinc-500">
                                <h1>803 317-2399</h1>&nbsp;
                                <p>&copy; {new Date().getFullYear()} Cruise Brains. All rights
                                    reserved.</p>
                            </div>
                        </div>
                    </Container.Inner>
                </div>
            </Container.Outer>
        </footer>
    )
}
