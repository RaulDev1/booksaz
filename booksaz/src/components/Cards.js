import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OrderingExample() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col xs><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cv4.litres.ru/pub/c/elektronnaya-kniga/cover_415/27061646-erih-mariya-remark-noch-v-lissabone-27061646.webp" />
      <Card.Body>
        <Card.Title>Ночь в Лиссабоне</Card.Title>
        <Card.Text>
        Трагический, полный драматизма роман о великой силе любви – любви, которая перед лицом смертельной опасности сокрушает любые преграды.
        </Card.Text>
        <Button variant="warning">buy and download</Button>
      </Card.Body>
    </Card></Col>
        <Col xs={{ order: 12 }}>    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cv0.litres.ru/pub/c/elektronnaya-kniga/cover_415/68275805-maykl-konnelli-lovushka-dlya-advokata.webp" />
      <Card.Body>
        <Card.Title>Ловушка для адвоката</Card.Title>
        <Card.Text>
        Для того чтобы успешный адвокат по уголовным делам Микки Холлер решил выступить в суде по другую сторону баррикады.
        </Card.Text>
        <Button variant="warning">buy and download</Button>
      </Card.Body>
    </Card></Col>
        <Col xs={{ order: 1 }}>    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cv3.litres.ru/pub/c/elektronnaya-kniga/cover_415/67848039-artem-kamenistyy-pir-dlya-izbrannyh.webp" />
      <Card.Body>
        <Card.Title>Пир для избранных</Card.Title>
        <Card.Text>
        «Пир для избранных» – фантастический роман Артёма Каменистого, четвертая книга цикла «Корм», жанр боевая фантастика.
        </Card.Text>
        <Button variant="warning">buy and download</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
  );
}

export default OrderingExample;