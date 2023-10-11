
export default function Button({children,type,onclick}) {
const styles ={
    add: 'bg-blue-600 px-3 py-1 border rounded-lg font-bold',
    delete: 'bg-blue-800 px-2 py-1 border rounded-lg font-black text-xl',
    update: 'bg-green-600 px-2 py-1 border rounded-lg font-bold text-xl'
}
  return (
    <button className={styles[type]} onClick={onclick}>{children}</button>
  )
}
