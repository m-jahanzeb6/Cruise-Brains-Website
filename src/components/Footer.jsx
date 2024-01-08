import Link from 'next/link'

import {Container} from '@/components/Container'
import {useEffect} from "react";

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
                    method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(dataToSend),
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
        }
    }, [])
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
                                <h1>(803) 317-2399</h1>&nbsp;
                                <p>&copy; {new Date().getFullYear()} Crusie Brains. All rights
                                    reserved.</p>
                            </div>
                        </div>
                    </Container.Inner>
                </div>
            </Container.Outer>
        </footer>
    )
}
