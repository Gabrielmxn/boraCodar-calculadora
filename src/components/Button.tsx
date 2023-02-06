import clsx from 'clsx';


interface ButtonProps {
  keyButton: string | React.ReactElement;
  type?: string;
}

export function Button({ keyButton, type }: ButtonProps){
  console.log(keyButton)
  return(
    <span className={clsx('w-[64px] h-[64px] rounded-full flex justify-center items-center shadow-black shadow-sm cursor-pointer', {
      'bg-blue-900': type === 'operation',
      'bg-blue-500': type === 'equal',
      'text-clear': type === 'clear'

     

    })}>
      {keyButton}
    </span>
  )
}