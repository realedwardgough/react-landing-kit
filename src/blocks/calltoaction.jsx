import Button from '../components/button.jsx';

function CallToAction() {
  return (
    <section className="w-full mx-auto text-center pr-2 pl-2 pt-6 pb-12 flex flex-col items-center justify-center bg-white fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
      <h2 className="w-full my-2 text-xl font-black leading-tight text-center text-gray-800 lg:mt-8">
          Enquire Today
        </h2>
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
        </div>

      <h3 className="my-4 text-1xl text-gray-600">
        Leave your details and basic requirements and we will get back to you
        within 24 hours.
      </h3>

      <Button label="Enquire" href="mailto:enquire@monstera-creative.co.uk"/>
    </section>
  );
}

export default CallToAction;
