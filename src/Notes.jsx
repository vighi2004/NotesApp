import React, { useState } from 'react'
import { Clipboard, Trash2 } from 'lucide-react'; 
function Notes() {
    const [form, setForm] = useState({ title: '', description: '' });
   const [list,setlist]=useState([]);

   function handle(){
    if(!form.title && !form.description){
        return;
    }
    setlist([...list,form]);
    setForm({title:'',description:''});
   }

   function deleteNote(idx) {
  const prev = [...list];
  prev.splice(idx, 1);
  setlist(prev);
}
  return (
    <div className="flex flex-col sm:flex-row">
      <div className='flex flex-col gap-1 sm:w-[50%] sm:border-r-4 border-b-4 w-full border-indigo-500 sm:h-screen h-auto justify center sm:justify-start p-6 '>
        <h1 className='font-extrabold text-5xl text-amber-50'>Add Notes</h1>
        <input  className='border-3 border-amber-50 text-amber-50 h-10 mt-1.5'  type='text' placeholder='Add title' value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}></input>
        <textarea className='border-3 border-amber-50 text-amber-50 h-30 mt-1.5 p-2 resize-none' placeholder='Add Description' value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}/>
        <button className='bg-amber-50 rounded-2xl h-15 mt-1.5'  onClick={handle}>Add Notes</button>
      </div>
        <div className='flex flex-col items-center sm:items-start gap-1 w-full sm:w-[50%] sm:border-l-4 border-indigo-500 h-auto sm:h-screen p-6 overflow-y-auto'>
        <h1 className='font-extrabold text-5xl text-amber-50 text-center sm:text-left w-full'>Recent Notes</h1>
         <div className='flex flex-wrap justify-center sm:justify-start p-4 gap-6 w-full'>
    {/* list.map goes here */}
           {list.map((note, index) => (
            /* Relative Container for the Icon and Content Alignment */
            <div key={index} className="relative w-52 h-52 flex items-center justify-center group">
              <Clipboard 
                className="w-full h-full text-amber-50 opacity-80" 
                strokeWidth={0.75} 
              />
                <div className="absolute inset-0 pt-14 pb-6 px-7 flex flex-col pointer-events-none">
                <h3 className="text-amber-50 font-bold text-center border-b border-amber-50/20 pb-1 truncate text-sm">
                  {note.title || "Untitled"}
                </h3>
                <p className="text-amber-100/80 text-xs mt-2 text-center break-words line-clamp-5 leading-relaxed">
                  {note.description}
                </p>
              </div>
               <button 
                onClick={() => deleteNote(index)}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition cursor-pointer shadow-md"
                title="Delete Note"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))} 
        </div>
      </div>
    </div>
  )
}

export default Notes;
