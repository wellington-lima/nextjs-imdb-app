export default function Results({ results }) {
  return(
    <div>
      { results.map((result, index) => (
        <h2 key={index}>{result.title}</h2>
      ))}
    </div>  
  
  )
}