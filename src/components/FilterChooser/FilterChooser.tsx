import React from "react";
import { FileInput } from '@mantine/core';

export function FilterChooser(props: any) {

    return (
        <FileInput
            placeholder="Pick a filter"
            label="Existing Filter"
        />);
}