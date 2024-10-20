import ButtonLink from "../atomic/ButtonLink";

function SuscribeReminder() {
  return (
    <>
      {false ? (
        <div className="flex flex-col w-1/2">
          <img src="" alt="" />
          <div className="flex flex-col ">
            <p>Berlangganan</p>
            <p>Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
            <ButtonLink style="second">Mulai Berlangganan</ButtonLink>
          </div>
        </div>
      ) : (
        <div className="flex">
          <img src="" alt="" />
          <div className="flex flex-col">
            <p>Berlangganan</p>
            <p>Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
            <ButtonLink style="second">Mulai Berlangganan</ButtonLink>
          </div>
        </div>
      )}
    </>
  );
}

export default SuscribeReminder;
