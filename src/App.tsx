import { Plus, PlusMinus, X, Divide, Minus, Equals, Percent} from "phosphor-react"


import { Button } from "./components/Button"

function App() {
  return(
    <div className="flex justify-center items-center h-screen w-full border">
      <div className="max-w-[356px] w-full bg-background-app shadow-background-app shadow-2xl text-white rounded-[48px] m-auto">
   
      <div className="mt-14 mx-8 p-5">
        <div className="flex justify-between items-center">
          <span></span>
          <span className="text-gray-900">1 + 1</span>
        </div>
        <div className="flex justify-between items-center">
          <Equals size={20} color="#6B6B6B" weight="fill" />
          <span className="text-4xl">2</span>
        </div>
      </div>
     

      <div className="grid grid-cols-4 mx-8 mb-5 gap-3 text-2xl text-white">
      
        <Button keyButton="CE" type="clear" />
        <Button keyButton="C" />
        <Button keyButton={<Percent size={28}  weight="fill" />} />
        <Button keyButton={<Divide size={28}  weight="fill"  />} type="operation" />

        <Button keyButton="7" />
        <Button keyButton="8" />
        <Button keyButton="9" />
        <Button keyButton={<X size={28}  weight="fill"  />} type="operation" />

        <Button keyButton="4" />
        <Button keyButton="5" />
        <Button keyButton="6" />
        <Button keyButton={<Minus size={28}  weight="fill"   />} type="operation" />

        <Button keyButton="1" />
        <Button keyButton="2" />
        <Button keyButton="3" />
        <Button keyButton={<Plus size={28}  weight="fill" />} type="operation" />

        <Button keyButton={<PlusMinus size={28}  weight="fill"  />} />
        <Button keyButton="0" />
        <Button keyButton="," />
        <Button keyButton={<Equals size={28}  weight="fill" />} type="equal" />

      
      </div>

     </div>
    </div>
  )
}

export { App }
