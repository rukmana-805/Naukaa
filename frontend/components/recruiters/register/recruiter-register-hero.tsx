export default function RecruiterRegisterHero() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Find & hire the
          <br />
          right talent with us
        </h1>

        <p className="text-lg text-gray-600 font-medium mt-4">
          Trusted by 9 Cr+ candidates | 5 Lakh+ employers
        </p>
      </div>

      <div className="flex items-center -space-x-4">

        {[12,32,44,56,27].map((id)=>(
          <div key={id} className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
            <img
              src={`https://i.pravatar.cc/150?img=${id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

      </div>

    </div>
  );
}