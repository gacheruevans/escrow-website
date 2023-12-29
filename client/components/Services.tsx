import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ color, title, icon, subtitle }) => {
  return (
    <div className="bg-indigo-100 bg-opacity-50 flex flex-row justify-start items-center p-3 m-2 cursor-pointer rounded-3xl hover:shadow-xl">
      <div
        className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
      >
        {icon}
      </div>
      <div className=" ml-5 flex flex-col flex-1">
        <h1 className="text-indigo-600 mt-2 text-lg">{title}</h1>
        <p className="mt-2 text-gray-600 text-sm md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );
};
const Services = () => {
  return (
    <div className="flex w-full justify-center items-center rounded-tl-3xl rounded-tr-3xl">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 p-y12 px-4">
        <div className="flex-1 flex-col justify-start items-start">
          <h1 className=" text-indigo-600 text-3xl sm:text-5xl py-2">
            Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-blue-800"
          title="Security Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privarcy and quality of our products."
        />
        <ServiceCard
          color="bg-violet-800"
          title="Best Exchange Rate"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Get the best currency exchange rates for your transfers to in foreign currencies."
        />
        <ServiceCard
          color="bg-rose-800"
          title="Fast Transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="We offer instant and secure transactioons, that rival many of our competitors."
        />
      </div>
    </div>
  );
};

export default Services;