import React, {useEffect} from 'react'

function PaginatedGallery() {
    useEffect(async () => {
      const result = await fetch('https://picsum.photos/v2/list?page=2&limit=100')
    }, [])
    
  return (
    <div>PaginatedGallery</div>
  )
}

export default PaginatedGallery