import * as React from "react"
import { Link, HeadFC } from "gatsby"
import { Layout } from "../components/Layout/Layout"
import { Title } from "../utils/components/Title/Title"

const NotFoundPage = () => {
  return (
    <Layout>
      <Title>Ошибка 404: страница не найдена</Title>
      <p>Но вы всегда можете вернуться <Link to="/">на главную</Link></p>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Страница не найдена</title>
