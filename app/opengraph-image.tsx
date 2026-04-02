import { ImageResponse } from 'next/og';

import { siteData } from './siteData';

export const alt = siteData.socialImageAlt;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          background:
            'radial-gradient(circle at top left, rgba(200,169,110,0.24), transparent 30%), linear-gradient(180deg, #55604b 0%, #4a5440 40%, #303728 100%)',
          color: '#f5f0e8',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            padding: '64px 72px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 26,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#c8a96e',
            }}
          >
            <div>{siteData.shortName}</div>
            <div>Ridgewood, Queens</div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 860,
            }}
          >
            <div
              style={{
                fontSize: 82,
                lineHeight: 0.95,
                letterSpacing: '-0.05em',
                marginBottom: 28,
              }}
            >
              Interior remodeling with cleaner tile, cabinet, paint, and finish work.
            </div>
            <div
              style={{
                fontSize: 30,
                lineHeight: 1.4,
                color: 'rgba(245, 240, 232, 0.82)',
                maxWidth: 820,
              }}
            >
              Bathrooms, kitchens, flooring, plaster, painting, cabinetry, doors, steps, and
              fireplace upgrades across Queens and the wider New York City area.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 14,
                flexWrap: 'wrap',
              }}
            >
              {['Bathrooms', 'Kitchens', 'Tile', 'Flooring', 'Cabinets', 'Painting'].map(
                (label) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      border: '1px solid rgba(255,255,255,0.14)',
                      borderRadius: 999,
                      padding: '12px 22px',
                      fontSize: 22,
                      color: 'rgba(245, 240, 232, 0.78)',
                    }}
                  >
                    {label}
                  </div>
                )
              )}
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 8,
              }}
            >
              <div style={{ fontSize: 24, color: '#c8a96e', textTransform: 'uppercase' }}>
                Free estimate
              </div>
              <div style={{ fontSize: 38 }}>{siteData.phoneDisplay}</div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
