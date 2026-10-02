import * as bathroom from './content/bathroom-remodeling';
import * as kitchen from './content/kitchen-remodeling';
import * as tile from './content/tile-installation';
import * as flooring from './content/flooring-installation';
import * as cabinet from './content/cabinet-installation';
import * as painting from './content/interior-painting';
import * as plaster from './content/plaster-drywall-finishing';

type ContentEntry = string | { title?: string; body?: string; q?: string; a?: string; href?: string; label?: string };
type ServiceContent = Record<string, readonly ContentEntry[]>;

export const servicePageContent: Record<string, ServiceContent> = {
  '/bathroom-remodeling-queens': bathroom,
  '/kitchen-remodeling-queens': kitchen,
  '/tile-installation-queens': tile,
  '/flooring-installation-queens': flooring,
  '/cabinet-installation-queens': cabinet,
  '/interior-painting-queens': painting,
  '/plaster-drywall-finishing-queens': plaster,
};
