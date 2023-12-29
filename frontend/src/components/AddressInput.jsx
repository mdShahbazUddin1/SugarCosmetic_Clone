import { FormLabel, GridItem, Input, InputGroup } from "@chakra-ui/react";
import React from "react";

function AddressInput({ placeholder, type, value, onChange }) {
  return (
    <>
      <GridItem w="100%">
        <InputGroup pos={"relative"}>
          <Input
            type={type}
            value={value}
            onChange={onChange}
            border={"1px solid gray"}
            aria-labelledby="yourInputLabel"
            _focus={{
              boxShadow: "none",
              border: "1px solid gray",
            }}
            _hover={false}
          />
          <FormLabel
            id="yourInputLabel"
            pos={"absolute"}
            p={"0 5px"}
            top={"8px"}
            left={"8px"}
            transition={"0.3s"}
            pointerEvents={"none"}
            backgroundColor={"white"}
            fontSize={"16px"}
            css={{
              "[aria-labelledby='yourInputLabel']:focus + &": {
                top: "-12px",
                left: "10px",
                fontSize: "13px",
              },
            }}
            bg={"white"}
            zIndex={"10"}
            color={"gray.600"}
          >
            {placeholder}
          </FormLabel>
        </InputGroup>
      </GridItem>
    </>
  );
}

export default AddressInput;
