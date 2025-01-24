import classNames from "classnames"

export const getBtnClasses = ({ variant, variantType, className, isLoading }) => {
    const btnClasses = classNames("py-2 px-2 rounded flex items-center justify-center font-bold", {
        " bg-primary cursor-pointer text-white":
            variant === "primary" && variantType === "solid",
        " bg-secondary cursor-pointer text-white":
            variant === "secondary" && variantType === "solid",
        " bg-tertiary cursor-pointer text-white":
            variant === "tertiary" && variantType === "solid",
        " border border-primary hover:bg-primary cursor-pointer text-primary hover:text-white":
            variant === "primary" && variantType === "outline",
        " border-2 border-secondary hover:bg-secondary cursor-pointer text-secondary":
            variant === "secondary" && variantType === "outline",
        " border-4 border-tertiary hover:bg-tertiary cursor-pointer text-tertiary":
            variant === "tertiary" && variantType === "outline",
        " cursor-no-drop opacity-70": isLoading
    }, className);

    return btnClasses;
}