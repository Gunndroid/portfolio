// components/Background.js
export default function Background() {
  return (
    <div className="sky">
      <style jsx>{`
        :global(body) {
          margin: 0;
          padding: 0;
        }

        .sky {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to top,
            #b3d8ff,
            #e6f2ff
          ); /* soft sky blue background with a slight gradient */
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
