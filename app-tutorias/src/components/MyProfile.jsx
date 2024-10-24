

function MyProfile() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 w-full ml-2 bg-gray-100">
     
      <div className="max-h-max w-full p-8 my-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="block text-3xl font-medium text-gray-700">Datos del usuario:</h2>
        <div className="block text-xl font-bold">Nombre:</div>
        <div className="block text-xl font-bold">Apellidos:</div>
        <div className="block text-xl font-bold">Grado:</div>
        <div className="block text-xl font-bold">Email:</div>
        <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500">Edit Profile</button>
      </div>
      <div className="max-h-max w-full p-8 my-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="block text-3xl font-medium text-gray-700 ">Citas pendientes</h2>
        <div>Aqui se mostrara una lista de las citas que tiene pendiente el usuario</div>
      </div>
    </div>
  )
}

export default MyProfile