import { FormLabel, GridItem, Input, InputGroup } from "@chakra-ui/react";
import React, { useState } from "react";

function AddressInput({ placeholder, type, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <GridItem w="100%">
        <InputGroup pos="relative">
          <Input
            type={type}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            border="1px solid gray"
            aria-labelledby="yourInputLabel"
            _focus={{
              boxShadow: "none",
              border: "1px solid gray",
            }}
            _hover={false}
          />
          <FormLabel
            id="yourInputLabel"
            pos="absolute"
            p="0 5px"
            top={isFocused || value ? "-12px" : "8px"}
            left="8px"
            fontSize={isFocused || value ? "13px" : "16px"}
            transition="0.3s"
            pointerEvents="none"
            backgroundColor="white"
            zIndex="10"
            color="gray.600"
          >
            {placeholder}
          </FormLabel>
        </InputGroup>
      </GridItem>
    </>
  );
}

export default AddressInput;
