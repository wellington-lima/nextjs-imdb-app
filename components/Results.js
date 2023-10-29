import Card from './Card'

export default function Results({ results }) {
  return(
    <div>
      { results.map((result, index) => (
        <Card key={result.id} result={result} />
      ))}
    </div>  
  
  )
}