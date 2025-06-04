export const MapView = () => {
  return (
    <section className="w-full h-[400px] bg-gray-100" id="map">
      <iframe
        src="https://www.google.com/maps?q=44.3890333344963,0.5851546558193422&hl=fr&z=16&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};
