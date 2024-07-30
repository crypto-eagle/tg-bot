import React, {ReactElement} from "react";
import {useColors} from "@hooks/useColors";
import {Flex, Text} from "@chakra-ui/react";

export interface ColumnStatWithIconViewProps {
    title: string;
    icon: ReactElement;
    children: React.ReactNode;
}

export function ColumnStatWithIconView(props: ColumnStatWithIconViewProps) {
    const { title, icon, children } = props;
    const colors = useColors();

    return (
        <Flex alignItems="center" gap="10px" w="fit-content">
            {icon}
            <Flex flexDirection="column" alignItems="flex-start">
                <Text className="block-title" color={colors.green}>
                    {title}:
                </Text>
                {children}
            </Flex>
        </Flex>
    );
}
