import PropTypes from 'prop-types';


import PhoneCard from "./PhoneCard";

const Phones = ({ phones }) => {
    return (
        <div className="py-6">
            <h1 className="text-2xl text-center">All category Phones</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    phones?.map((phone, idx) => <PhoneCard key={idx} phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

Phones.propTypes = {
    phones: PropTypes.object.isRequired
}

export default Phones;