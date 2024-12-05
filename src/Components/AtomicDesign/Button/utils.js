import classNames from "classnames"

export const getBtnClasses = ({ variant, variantType, className, isLoading }) => {
    const btnClasses = classNames("py-2 px-2 rounded flex items-center justify-center text-white font-bold", {
        " bg-primary cursor-pointer":
            variant === "primary" && variantType === "solid",
        " bg-secondary cursor-pointer":
            variant === "secondary" && variantType === "solid",
        " bg-tertiary cursor-pointer":
            variant === "tertiary" && variantType === "solid",
        " border-2 border-primary hover:bg-primary cursor-pointer":
            variant === "primary" && variantType === "outline",
        " border-2 border-secondary hover:bg-secondary cursor-pointer":
            variant === "secondary" && variantType === "outline",
        " border-2 border-tertiary hover:bg-tertiary cursor-pointer":
            variant === "tertiary" && variantType === "outline",
        " cursor-no-drop opacity-70": isLoading
    }, className);

    return btnClasses;
}