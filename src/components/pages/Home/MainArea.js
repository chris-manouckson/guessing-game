import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 24px;
`;

const Title = styled.h2``;

const Form = styled.form`
  margin: 12px 0;
`;

const FormInput = styled.input`
`;

const FormButton = styled.button``;

const MainArea = (props) => {
  const {
    cityName,
    onSubmit,
  } = props;

  const [inputValue, setInputValue] = useState(0);

  const handleChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    onSubmit(parseInt(inputValue));

    setInputValue(0);
  }, [inputValue, onSubmit]);

  return (
    <Container>
      <Title>What do you think, what is the temperature of <b>{cityName}</b>?</Title>

      <Form onSubmit={handleSubmit}>
        <FormInput
          value={inputValue}
          onChange={handleChange}
          type="number"
          placeholder="E.g. 25"
        />
        <FormButton>
          Submit
        </FormButton>
      </Form>
    </Container>
  );
};

export default MainArea;
