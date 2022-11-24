import * as React from "react"
import { Link, HeadFC } from "gatsby"
import { Layout } from "../components/Layout/Layout"
import { Title } from "../utils/components/Title/Title"
import { Container } from "../utils/components/Container/Container"
import { Section } from "../utils/components/Section/Section"

const NotFoundPage = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <Title>Ошибка 404: страница не найдена</Title>
          <p>Но вы всегда можете вернуться <Link to="/">на главную</Link></p>
        </Container>
      </Section>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Страница не найдена</title>
