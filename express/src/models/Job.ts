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
    allowNull: true
  })
  status!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  indeed!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  porters!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  porters_store_id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  store_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  job_title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  job_catchcopy!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  address!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  prefecture!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  street!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  building!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  job_type!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  job_salary_type!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  job_salary_min!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  job_salary_max!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  job_salary_display!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  job_fixed_overtime!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  job_insurance!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  job_trial_period!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  job_description!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  job_ideal_person!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  job_worktime!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  job_holiday!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  job_address!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  job_access!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  job_salary!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  job_benefit!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  job_notes!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  job_url!: string;
}
