import { type SearchBarProps } from '@/types/types'

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type='text'
      placeholder='Buscar en la transcripción...'
      value={searchTerm}
      onChange={handleSearch}
      className='mt-10 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-cyan-600 text-cyan-600'
    />
  )
}

export default SearchBar
