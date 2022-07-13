/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useStateValue } from "../state/StateProvider";
import Link from "next/link";
import { auth } from "../firebase-info";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
    const [{ user }] = useStateValue();

    const navigation = [
        { name: user ? "Logout" : "Login", href: "/login", current: false },
    ];

    const login = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <Disclosure as="nav" className="bg-green-500 w-screen">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-2">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center content-between">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src="images/top-hat.png"
                                        alt=""
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src="images/top-hat.png"
                                        alt=""
                                    />
                                    <h1 className=" ml-4 font-bold text-lg">
                                        <Link
                                            href="/"
                                            className="text-black text-xl font-semibold"
                                        >
                                            The Sous Chef
                                        </Link>
                                    </h1>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex mt-1 space-x-4">
                                        {navigation.map((item) => (
                                            <button
                                                key={item.name}
                                                onClick={
                                                    item.href === "/login"
                                                        ? login
                                                        : null
                                                }
                                            >
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-gray-900 text-white"
                                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                        "px-3 py-2 rounded-md text-sm font-medium"
                                                    )}
                                                    aria-current={
                                                        item.current
                                                            ? "page"
                                                            : undefined
                                                    }
                                                >
                                                    {item.name}
                                                </Link>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block px-3 py-2 rounded-md text-base font-medium"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                    {/* <Disclosure.Panel className={"sm:hidden self-end"}>
                        {user ? (
                            <text>hi, {user.email.split("@")[0]}</text>
                        ) : (
                            <text>hi, Stranger</text>
                        )}
                    </Disclosure.Panel> */}
                </>
            )}
        </Disclosure>
    );
}
