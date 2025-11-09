export default function HeroArt() {
  
  return (
    <>
    <div className="bg-primary opacity-10 h-80 aspect-square rounded-full ml-8 mt-16"></div>
    <div className="absolute top-0 mx-auto w-72 aspect-square grid grid-cols-6 grid-rows-6">
      <div className="col-start-3 col-span-2 row-start-6 bg-primary"></div>
      <div className="col-start-2 row-start-4 row-span-3 bg-primary"></div>
      <div className="col-start-5 row-start-5 row-span-2 bg-primary"></div>
      <div className="col-start-3 row-start-5 bg-primary"></div>
      <div className="col-start-4 row-start-4 bg-primary"></div>
    </div>
    </>
    )
}