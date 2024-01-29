export interface IWishCard {
  loading?: boolean;
  title: string;
  description?: string;
  imageSrc?: string;

  onDelete?: () => void;
  onEdit?: () => void;
}
