export interface NavbarItemType {
    label: string,
    href: string,
    isDropDown: boolean,
    DropDownData?: any 
};

export const NavbarArray: Array<NavbarItemType> = [
    {
        label: "Female",
        href: "/female/female",
        isDropDown: false,
    },
    {
        label: "Male",
        href: "/male/male",
        isDropDown: false,
    },
    {
        label: "Kids",
        href: "/kids",
        isDropDown: false,
    },
    {
        label: "All Products",
        href: "/products",
        isDropDown: false,
    }
]    