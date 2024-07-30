import React, {ReactElement} from "react";
import {useColors} from "@hooks/useColors";
import {Flex, Text} from "@chakra-ui/react";

export interface IconStatViewProps {
    title: string;
    icon: ReactElement;
    children: React.ReactNode;
}

export function StatWithIconView(props: IconStatViewProps) {
    const { title, icon, children } = props;
    const colors = useColors();

    return (
        <Flex align="center">
            <Flex alignItems="center" gap="10px" mr={2}>
                {icon}
                <Text className="block-title" color={colors.green}>
                    {title}:
                </Text>
            </Flex>
            {children}
        </Flex>
    );
}
