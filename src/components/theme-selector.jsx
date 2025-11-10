export default function ThemeSelector({ themes, onSelect }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Choose a Theme</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className="border rounded-xl p-3 hover:shadow-lg cursor-pointer"
            onClick={() => onSelect(theme)}
          >
            <img src={theme.preview} alt={theme.name} className="rounded mb-2" />
            <p className="font-medium">{theme.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
