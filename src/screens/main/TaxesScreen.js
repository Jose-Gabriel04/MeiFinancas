import TaxCard from '../../components/ui/TaxCard';

const TAXES_DATA = [{
  id: 'DAS',
  name: 'DAS/MEI',
  amount: 85.00,
  dueDate: '20 de cada mês',
  description: 'Documento de Arrecadação do MEI',
}];

export default function TaxesScreen() {
  return (
    <ScrollView>
      {TAXES_DATA.map((tax) => (
        <TaxCard
          key={tax.id}
          name={tax.name}
          amount={tax.amount}
          dueDate={tax.dueDate}
          description={tax.description}
        />
      ))}
    </ScrollView>
  );
}