import { useState } from 'react'
 
function NoteCard({ title, body }) {
  const [showMore, setShowMore] = useState(false)
  return (
<div>
<h3 className="pr-6 font-medium text-black">{title}</h3>
      {showMore && (
<p className="mt-2 text-sm text-[#4d4d4d]">{body}</p>
      )}
      <button
        type="button"
        onClick={() => setShowMore((prev) => !prev)}
        className="mt-3 cursor-pointer text-xs font-normal text-[#b83f45] underline"
>
        {showMore ? 'Show less' : 'Show more'}
</button>
</div>
  )
} 
export default NoteCard
 