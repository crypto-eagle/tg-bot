import { Icon } from "@chakra-ui/react";
import React from "react";
import { useColors } from "@hooks/useColors";

export function StatusIcon(props: any) {
    const colors = useColors();

    return (
        <Icon viewBox="0 0 200 200" {...props}>
            <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 25.8571C11.3929 25.8571 9.78574 25.5357 8.28574 25C3.35717 23.0714 0.142883 18.3571 0.142883 13C0.142883 5.92854 5.9286 0.142822 13 0.142822C16.4286 0.142822 19.6429 1.42854 22.1072 3.89282C22.5357 4.32139 22.5357 4.96425 22.1072 5.39282C21.6786 5.82139 21.0357 5.82139 20.6072 5.39282C18.5715 3.35711 15.8929 2.28568 13 2.28568C7.10717 2.28568 2.28574 7.10711 2.28574 13C2.28574 17.5 4.96431 21.3571 9.14288 22.9643C10.4286 23.5 11.7143 23.7143 13 23.7143C13.6429 23.7143 14.0715 24.1428 14.0715 24.7857C14.0715 25.4285 13.6429 25.8571 13 25.8571Z"
                      fill={colors.green}
                />
                <path d="M17.2857 25.1071C16.1071 25.1071 15.7857 23.5 16.8571 23.0714C21.0357 21.4643 23.7143 17.5 23.7143 13.1071C23.7143 12.4643 24.1429 12.0357 24.7857 12.0357C25.4286 12.0357 25.8571 12.4643 25.8571 13.1071C25.8571 18.4643 22.6429 23.1786 17.7143 25.1071C17.5 25 17.3929 25.1071 17.2857 25.1071ZM13 20.5C8.82143 20.5 5.5 17.1786 5.5 13C5.5 8.82143 8.82143 5.5 13 5.5C15.0357 5.5 16.8571 6.25 18.3571 7.75C18.7857 8.17857 18.7857 8.82143 18.3571 9.25C17.9286 9.67857 17.2857 9.67857 16.8571 9.25C15.7857 8.17857 14.3929 7.64286 13 7.64286C10 7.64286 7.64286 10 7.64286 13C7.64286 16 10 18.3571 13 18.3571C16 18.3571 18.3571 16 18.3571 13C18.3571 12.3571 18.7857 11.9286 19.4286 11.9286C20.0714 11.9286 20.5 12.3571 20.5 13C20.5 17.1786 17.1786 20.5 13 20.5Z"
                      fill={colors.green}
                />
            </svg>
        </Icon>
    );
}
