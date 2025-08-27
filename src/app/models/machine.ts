export interface Machine {
  id: number;
  code: string;
  status: string;
  product: string;
  line: string; // <-- burayı ekle
  productionTarget?: number;  // opsiyonel
  productionAchieved?: number; // opsiyone
   shift?: string;
}
