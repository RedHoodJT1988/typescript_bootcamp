/* eslint-disable */
import { strict as assert } from "assert";
import { title } from "process";

// Arrays can contain anything, including objects.
type Link = {
    title: string;
    url: string;
};

const microsoft = {
    title: "microsoft",
    url: "https://www.microsoft.com",
};

const typescript = {
    title: "typescript",
    url: "https://www.typescriptlang.org",
};

const sites = [microsoft, typescript];
console.log(sites);

const tsUrl = sites[1].url;
sites[0].title = "Microsoft";

console.log(sites);