import ButtonLink from "../atomic/ButtonLink";

function SuscribeReminder() {
  return (
    <>
      {false ? (
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col ">
            <img src="Warning.png" alt="warning" />
            <p>Saat ini anda belum berlangganan</p>
            <p>Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
            <ButtonLink style="second">Mulai Berlangganan</ButtonLink>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex-col bg-slate-500 p-4 rounded-lg mt-10">
            <div className="flex">
              <img className="w-20 h-20" src="Warning.png" alt="warning" />
              <div className="flex flex-col">
                <p className="font-bold text-lg">Saat ini anda belum berlangganan</p>
                <p className="mt-3">Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
              </div>
            </div>
            <div className="flex justify-end">
              <ButtonLink to="/premium" style="second">
                Mulai Berlangganan
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SuscribeReminder;
