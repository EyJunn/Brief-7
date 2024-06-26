

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-tr from-violet-500 to-orange-300">
      <img src="KeeptoDream.png" />
      <div className=" border-4 border-double border-white w-96 h-36 ">
        <h2 className="text-center text-2xl">Welcome on Keepto Dream. </h2>

        <p className="text-center"> Here you can exchange your currency for cryptocurrency as well as exchange your cryptocurrency with other users. So join us <a href="/register" className="hover:text-black pointer">here</a>  or log in <a href="/login" className="hover:text-black pointer">here</a></p>
      </div>

    </main>
  );
}
