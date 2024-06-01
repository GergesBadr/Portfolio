function FunFactsItem({ fact }) {
  return (
    <li className="border-t-2 border-t-gray-300 py-6 dark:border-t-gray-700 md:border-t-0 md:py-0">
      {fact.icon}
      <h3 className="heading-3 mb-4 mt-2">{fact.title}</h3>
      <p className="[&_a]:unique-text text-lg [&_a]:font-medium">{fact.desc}</p>
    </li>
  );
}

export default FunFactsItem;
