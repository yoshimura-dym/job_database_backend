import { Table, Column, Model, DataType } from 'sequelize-typescript';
export interface JobI {
  job_id: string; // このフィールドだけが必須
  status?: string;
  indeed?: string;
  porters?: string;
  porters_store_id?: string;
  store_name?: string;
  job_title?: string;
  job_catchcopy?: string;
  address?: string;
  prefecture?: string;
  street?: string;
  building?: string;
  job_type?: string;
  job_salary_type?: string;
  job_salary_min?: number;
  job_salary_max?: number;
  job_salary_display?: string;
  job_fixed_overtime?: string;
  job_insurance?: string;
  job_trial_period?: string;
  job_description?: string;
  job_ideal_person?: string;
  job_worktime?: string;
  job_holiday?: string;
  job_address?: string;
  job_access?: string;
  job_salary?: string;
  job_benefit?: string;
  job_notes?: string;
  job_url?: string;
}

@Table({
  timestamps: true,
  tableName: 'jobs'
})
export class Job extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true
  })
  job_id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  status!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  indeed!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  porters!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  porters_store_id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  store_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_catchcopy!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  address!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  prefecture!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  street!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  building!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_type!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_salary_type!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0
  })
  job_salary_min!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0
  })
  job_salary_max!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_salary_display!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_fixed_overtime!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_insurance!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_trial_period!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_description!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_ideal_person!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_worktime!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_holiday!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_address!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_access!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_salary!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_benefit!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_notes!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "データなし"
  })
  job_url!: string;
}
