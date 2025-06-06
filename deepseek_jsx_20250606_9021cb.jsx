export default function Analytics() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Аналитика</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">SWOT-анализ</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Сильные стороны</h3>
            <ul className="list-disc pl-5">
              <li>Использование AI для анализа данных</li>
              <li>Интеграция с соцсетями</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Слабые стороны</h3>
            <ul className="list-disc pl-5">
              <li>Зависимость от API сторонних платформ</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4P (Маркетинг)</h2>
        <div className="bg-white p-4 rounded shadow">
          <p><strong>Product:</strong> AnalyticHub — платформа для прогнозирования трендов.</p>
          <p><strong>Price:</strong> Подписка от $99/месяц.</p>
          <p><strong>Place:</strong> Облачное решение (AWS).</p>
          <p><strong>Promotion:</strong> Партнёрские программы, вебинары.</p>
        </div>
      </section>
    </div>
  );
}