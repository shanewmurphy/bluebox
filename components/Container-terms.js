export default function ContainerTerms() {
  return (
    <div className="w-11/12 mx-auto rounded-xl bg-bkgGray antialiased lg:py-12 md:py-8 lg:px-12 md:px-8 sm:py-8 sm:px-4 lg:my-60 md:my-32 sm:my-24">
      <div>
        <h3 className="text-center text-black lg:text-6xl md:text-5xl sm:text-4xl font-extrabold mb-6">
          Container Rental Terms & Conditions
        </h3>
      </div>
      <div class="grid lg:grid-cols-2 lg:gap-x-16 md:gap-x-8 lg:gap-y-8 md:gap-y-8 sm:gap-y-8">
        <div>
          <h6 className="text-3xl font-bold text-blue mb-1">Rental Period</h6>
          <p className="lg:text-sm md:text-sm sm:text-xs leading-relaxed font-medium text-black mb-2">
            The rental period commences on the agreed-upon start date and
            terminates on the specified end date as outlined in the rental
            agreement.
          </p>
          <p className="lg:text-sm md:text-sm sm:text-xs leading-relaxed font-medium text-black">
            Rental extensions may be available upon request and subject to
            availability.
          </p>
        </div>
        <div>
          <h6 className="text-3xl font-bold text-blue mb-1">Payment Terms</h6>
          <p className="lg:text-sm md:text-sm sm:text-xs font-medium text-black mb-2">
            Renter agrees to pay the rental fee as specified in the rental
            agreement.
          </p>
          <p className="lg:text-sm md:text-sm sm:text-xs font-medium text-black">
            Payments are due on a weekly/monthly/quarterly basis and should be
            made by the agreed-upon payment method.
          </p>
          <p className="lg:text-sm md:text-sm sm:text-xs font-medium text-black mt-2">
            Late payments may incur additional fees or penalties as outlined in
            the rental agreement.
          </p>
        </div>
        <div>
          <h6 className="text-3xl font-bold text-blue mb-1">Access and Use</h6>
          <p className="lg:text-sm md:text-sm sm:text-xs font-medium text-black mb-2">
            Renter is granted exclusive access to the rented storage container
            for the duration of the rental period.
          </p>
          <p className="lg:text-sm md:text-sm sm:text-xs font-medium text-black">
            The container is to be used solely for storage purposes and may not
            be sublet or shared without prior written consent from the Company.
          </p>
        </div>
        <div>
          <h6 className="text-3xl font-bold text-blue mb-1">
            Prohibited Items
          </h6>
          <p className="lg:text-sm md:text-sm sm:text-xs font-medium text-black mb-2">
            Renter agrees not to store any illegal substances, hazardous
            materials, flammable items, perishable goods, live animals,
            valuables & irreplaceable items, illegal substances, firearms and
            ammunition Items or any other items deemed inappropriate or
            prohibited by law.
          </p>
        </div>
        <div>
          <h6 className="text-3xl font-bold text-blue mb-1">Liability</h6>
          <p className="lg:text-sm md:text-sm sm:text-xs font-medium text-black mb-2">
            The Company shall not be held liable for any loss, damage, or theft
            of Renter&apos;s stored belongings.
          </p>
          <p className="lg:text-sm md:text-sm sm:text-xs font-medium text-black">
            Renter is encouraged to secure appropriate insurance coverage for
            their stored items.
          </p>
        </div>
        <div>
          <h6 className="text-3xl font-bold text-blue mb-1">Termination</h6>
          <p className="lg:text-sm md:text-sm sm:text-xs font-medium text-black mb-2">
            Either party may terminate the contract by providing written notice
            within the specified notice period as outlined in the agreement.
          </p>
          <p className="lg:text-sm md:text-sm sm:text-xs font-medium text-black">
            Upon termination, Renter shall remove all belongings from the
            container and return it in the same condition as received, subject
            to a final inspection by the Company.
          </p>
        </div>
      </div>
    </div>
  );
}
