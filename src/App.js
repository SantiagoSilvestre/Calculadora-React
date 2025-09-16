
import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  const handleOnSumNumber = () => {
    if(firstNumber ==='0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('');
    }
  }

  const handleOnSubNumber = () => {
    if(firstNumber ==='0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub))
      setOperation('');
    }
  }

  const handleOnMultiply = () => {
    if(firstNumber ==='0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const sub = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sub))
      setOperation('');
    }
  }

  const handleOnDiv = () => {
    if(firstNumber ==='0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div))
      setOperation('');
    }
  }

  const handleRemoveNumber = () => {
    setCurrentNumber(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
  };

  const handleOnPercent = () => {
  if (firstNumber !== '0' && operation !== '') {
    setCurrentNumber(String((Number(firstNumber) * Number(currentNumber)) / 100));
  } else {
    setCurrentNumber(String(Number(currentNumber) / 100));
  }
};

  const handleOnEquals = () => {
    if(firstNumber !=='0' && operation !== '' && currentNumber !== '0' ) {
      switch(operation) {
        case '+':
          handleOnSumNumber();
          break;
        case '-':
          handleOnSubNumber()
          break;
        case '/':
          handleOnDiv();
          break;
        case 'x':
          handleOnMultiply();
          break;
        case '%':
          handleOnPercent();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="%" onClick={handleOnPercent}/>
          <Button label="/" onClick={handleOnDiv}/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label= "<=" onClick={handleRemoveNumber}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="x" onClick={handleOnMultiply}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleOnSubNumber}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleOnSumNumber}/>
        </Row>
        <Row>
          <Button label="+/-"/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={handleOnEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
