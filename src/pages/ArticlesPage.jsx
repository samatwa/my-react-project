import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createBook, getBooks } from "../store/articles/articlesOptions"
import CreateArticlesForm from "../components/CreateArticlesForm/CreateArticlesForm"

const ArticlesPage = () => {
  const {loading, error, items, errorMessage} = useSelector((state) => state.articles)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  const create =  (body)  => {
    dispatch(createBook(body))
  }
  
  return (
    <div>
      <h1>ArticlesPage</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Oops.. some error</h2>}
      {errorMessage && <h2>{errorMessage}</h2>}
      <br />
      <CreateArticlesForm submit={create} />
      {items?.length > 0 && items.map((el) => <p key={el.id}>{el.title}</p>)}
    </div>
  );
}

export default ArticlesPage