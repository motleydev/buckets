import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "bucket" */
export type Bucket = {
  __typename?: 'bucket';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  items: Array<Bucket_Item>;
  /** An aggregate relationship */
  items_aggregate: Bucket_Item_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "bucket" */
export type BucketItemsArgs = {
  distinct_on?: InputMaybe<Array<Bucket_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bucket_Item_Order_By>>;
  where?: InputMaybe<Bucket_Item_Bool_Exp>;
};


/** columns and relationships of "bucket" */
export type BucketItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bucket_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bucket_Item_Order_By>>;
  where?: InputMaybe<Bucket_Item_Bool_Exp>;
};

/** aggregated selection of "bucket" */
export type Bucket_Aggregate = {
  __typename?: 'bucket_aggregate';
  aggregate?: Maybe<Bucket_Aggregate_Fields>;
  nodes: Array<Bucket>;
};

/** aggregate fields of "bucket" */
export type Bucket_Aggregate_Fields = {
  __typename?: 'bucket_aggregate_fields';
  avg?: Maybe<Bucket_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bucket_Max_Fields>;
  min?: Maybe<Bucket_Min_Fields>;
  stddev?: Maybe<Bucket_Stddev_Fields>;
  stddev_pop?: Maybe<Bucket_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bucket_Stddev_Samp_Fields>;
  sum?: Maybe<Bucket_Sum_Fields>;
  var_pop?: Maybe<Bucket_Var_Pop_Fields>;
  var_samp?: Maybe<Bucket_Var_Samp_Fields>;
  variance?: Maybe<Bucket_Variance_Fields>;
};


/** aggregate fields of "bucket" */
export type Bucket_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bucket_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Bucket_Avg_Fields = {
  __typename?: 'bucket_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "bucket". All fields are combined with a logical 'AND'. */
export type Bucket_Bool_Exp = {
  _and?: InputMaybe<Array<Bucket_Bool_Exp>>;
  _not?: InputMaybe<Bucket_Bool_Exp>;
  _or?: InputMaybe<Array<Bucket_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  items?: InputMaybe<Bucket_Item_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "bucket" */
export enum Bucket_Constraint {
  /** unique or primary key constraint */
  BucketPkey = 'Bucket_pkey'
}

/** input type for incrementing numeric columns in table "bucket" */
export type Bucket_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "bucket" */
export type Bucket_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  items?: InputMaybe<Bucket_Item_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "bucket_item" */
export type Bucket_Item = {
  __typename?: 'bucket_item';
  /** An object relationship */
  bucket: Bucket;
  bucket_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  item: Item;
  item_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "bucket_item" */
export type Bucket_Item_Aggregate = {
  __typename?: 'bucket_item_aggregate';
  aggregate?: Maybe<Bucket_Item_Aggregate_Fields>;
  nodes: Array<Bucket_Item>;
};

/** aggregate fields of "bucket_item" */
export type Bucket_Item_Aggregate_Fields = {
  __typename?: 'bucket_item_aggregate_fields';
  avg?: Maybe<Bucket_Item_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bucket_Item_Max_Fields>;
  min?: Maybe<Bucket_Item_Min_Fields>;
  stddev?: Maybe<Bucket_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Bucket_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bucket_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Bucket_Item_Sum_Fields>;
  var_pop?: Maybe<Bucket_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Bucket_Item_Var_Samp_Fields>;
  variance?: Maybe<Bucket_Item_Variance_Fields>;
};


/** aggregate fields of "bucket_item" */
export type Bucket_Item_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bucket_Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bucket_item" */
export type Bucket_Item_Aggregate_Order_By = {
  avg?: InputMaybe<Bucket_Item_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bucket_Item_Max_Order_By>;
  min?: InputMaybe<Bucket_Item_Min_Order_By>;
  stddev?: InputMaybe<Bucket_Item_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bucket_Item_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bucket_Item_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bucket_Item_Sum_Order_By>;
  var_pop?: InputMaybe<Bucket_Item_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bucket_Item_Var_Samp_Order_By>;
  variance?: InputMaybe<Bucket_Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "bucket_item" */
export type Bucket_Item_Arr_Rel_Insert_Input = {
  data: Array<Bucket_Item_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Bucket_Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Bucket_Item_Avg_Fields = {
  __typename?: 'bucket_item_avg_fields';
  bucket_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "bucket_item" */
export type Bucket_Item_Avg_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bucket_item". All fields are combined with a logical 'AND'. */
export type Bucket_Item_Bool_Exp = {
  _and?: InputMaybe<Array<Bucket_Item_Bool_Exp>>;
  _not?: InputMaybe<Bucket_Item_Bool_Exp>;
  _or?: InputMaybe<Array<Bucket_Item_Bool_Exp>>;
  bucket?: InputMaybe<Bucket_Bool_Exp>;
  bucket_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  item?: InputMaybe<Item_Bool_Exp>;
  item_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "bucket_item" */
export enum Bucket_Item_Constraint {
  /** unique or primary key constraint */
  BucketItemPkey = 'bucket_item_pkey'
}

/** input type for incrementing numeric columns in table "bucket_item" */
export type Bucket_Item_Inc_Input = {
  bucket_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  item_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "bucket_item" */
export type Bucket_Item_Insert_Input = {
  bucket?: InputMaybe<Bucket_Obj_Rel_Insert_Input>;
  bucket_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  item?: InputMaybe<Item_Obj_Rel_Insert_Input>;
  item_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Bucket_Item_Max_Fields = {
  __typename?: 'bucket_item_max_fields';
  bucket_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "bucket_item" */
export type Bucket_Item_Max_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bucket_Item_Min_Fields = {
  __typename?: 'bucket_item_min_fields';
  bucket_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "bucket_item" */
export type Bucket_Item_Min_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bucket_item" */
export type Bucket_Item_Mutation_Response = {
  __typename?: 'bucket_item_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Bucket_Item>;
};

/** on_conflict condition type for table "bucket_item" */
export type Bucket_Item_On_Conflict = {
  constraint: Bucket_Item_Constraint;
  update_columns?: Array<Bucket_Item_Update_Column>;
  where?: InputMaybe<Bucket_Item_Bool_Exp>;
};

/** Ordering options when selecting data from "bucket_item". */
export type Bucket_Item_Order_By = {
  bucket?: InputMaybe<Bucket_Order_By>;
  bucket_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item?: InputMaybe<Item_Order_By>;
  item_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bucket_item */
export type Bucket_Item_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "bucket_item" */
export enum Bucket_Item_Select_Column {
  /** column name */
  BucketId = 'bucket_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "bucket_item" */
export type Bucket_Item_Set_Input = {
  bucket_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  item_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Bucket_Item_Stddev_Fields = {
  __typename?: 'bucket_item_stddev_fields';
  bucket_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "bucket_item" */
export type Bucket_Item_Stddev_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bucket_Item_Stddev_Pop_Fields = {
  __typename?: 'bucket_item_stddev_pop_fields';
  bucket_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "bucket_item" */
export type Bucket_Item_Stddev_Pop_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bucket_Item_Stddev_Samp_Fields = {
  __typename?: 'bucket_item_stddev_samp_fields';
  bucket_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "bucket_item" */
export type Bucket_Item_Stddev_Samp_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Bucket_Item_Sum_Fields = {
  __typename?: 'bucket_item_sum_fields';
  bucket_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "bucket_item" */
export type Bucket_Item_Sum_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
};

/** update columns of table "bucket_item" */
export enum Bucket_Item_Update_Column {
  /** column name */
  BucketId = 'bucket_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Bucket_Item_Var_Pop_Fields = {
  __typename?: 'bucket_item_var_pop_fields';
  bucket_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "bucket_item" */
export type Bucket_Item_Var_Pop_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bucket_Item_Var_Samp_Fields = {
  __typename?: 'bucket_item_var_samp_fields';
  bucket_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "bucket_item" */
export type Bucket_Item_Var_Samp_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Bucket_Item_Variance_Fields = {
  __typename?: 'bucket_item_variance_fields';
  bucket_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "bucket_item" */
export type Bucket_Item_Variance_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Bucket_Max_Fields = {
  __typename?: 'bucket_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Bucket_Min_Fields = {
  __typename?: 'bucket_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "bucket" */
export type Bucket_Mutation_Response = {
  __typename?: 'bucket_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Bucket>;
};

/** input type for inserting object relation for remote table "bucket" */
export type Bucket_Obj_Rel_Insert_Input = {
  data: Bucket_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Bucket_On_Conflict>;
};

/** on_conflict condition type for table "bucket" */
export type Bucket_On_Conflict = {
  constraint: Bucket_Constraint;
  update_columns?: Array<Bucket_Update_Column>;
  where?: InputMaybe<Bucket_Bool_Exp>;
};

/** Ordering options when selecting data from "bucket". */
export type Bucket_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  items_aggregate?: InputMaybe<Bucket_Item_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bucket */
export type Bucket_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "bucket" */
export enum Bucket_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "bucket" */
export type Bucket_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Bucket_Stddev_Fields = {
  __typename?: 'bucket_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Bucket_Stddev_Pop_Fields = {
  __typename?: 'bucket_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Bucket_Stddev_Samp_Fields = {
  __typename?: 'bucket_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Bucket_Sum_Fields = {
  __typename?: 'bucket_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "bucket" */
export enum Bucket_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Bucket_Var_Pop_Fields = {
  __typename?: 'bucket_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Bucket_Var_Samp_Fields = {
  __typename?: 'bucket_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Bucket_Variance_Fields = {
  __typename?: 'bucket_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "item" */
export type Item = {
  __typename?: 'item';
  /** An array relationship */
  bucket_items: Array<Bucket_Item>;
  /** An aggregate relationship */
  bucket_items_aggregate: Bucket_Item_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "item" */
export type ItemBucket_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Bucket_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bucket_Item_Order_By>>;
  where?: InputMaybe<Bucket_Item_Bool_Exp>;
};


/** columns and relationships of "item" */
export type ItemBucket_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bucket_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bucket_Item_Order_By>>;
  where?: InputMaybe<Bucket_Item_Bool_Exp>;
};

/** aggregated selection of "item" */
export type Item_Aggregate = {
  __typename?: 'item_aggregate';
  aggregate?: Maybe<Item_Aggregate_Fields>;
  nodes: Array<Item>;
};

/** aggregate fields of "item" */
export type Item_Aggregate_Fields = {
  __typename?: 'item_aggregate_fields';
  avg?: Maybe<Item_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Item_Max_Fields>;
  min?: Maybe<Item_Min_Fields>;
  stddev?: Maybe<Item_Stddev_Fields>;
  stddev_pop?: Maybe<Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Item_Stddev_Samp_Fields>;
  sum?: Maybe<Item_Sum_Fields>;
  var_pop?: Maybe<Item_Var_Pop_Fields>;
  var_samp?: Maybe<Item_Var_Samp_Fields>;
  variance?: Maybe<Item_Variance_Fields>;
};


/** aggregate fields of "item" */
export type Item_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Item_Avg_Fields = {
  __typename?: 'item_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "item". All fields are combined with a logical 'AND'. */
export type Item_Bool_Exp = {
  _and?: InputMaybe<Array<Item_Bool_Exp>>;
  _not?: InputMaybe<Item_Bool_Exp>;
  _or?: InputMaybe<Array<Item_Bool_Exp>>;
  bucket_items?: InputMaybe<Bucket_Item_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "item" */
export enum Item_Constraint {
  /** unique or primary key constraint */
  ItemPkey = 'Item_pkey'
}

/** input type for incrementing numeric columns in table "item" */
export type Item_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "item" */
export type Item_Insert_Input = {
  bucket_items?: InputMaybe<Bucket_Item_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Item_Max_Fields = {
  __typename?: 'item_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Item_Min_Fields = {
  __typename?: 'item_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "item" */
export type Item_Mutation_Response = {
  __typename?: 'item_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Item>;
};

/** input type for inserting object relation for remote table "item" */
export type Item_Obj_Rel_Insert_Input = {
  data: Item_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Item_On_Conflict>;
};

/** on_conflict condition type for table "item" */
export type Item_On_Conflict = {
  constraint: Item_Constraint;
  update_columns?: Array<Item_Update_Column>;
  where?: InputMaybe<Item_Bool_Exp>;
};

/** Ordering options when selecting data from "item". */
export type Item_Order_By = {
  bucket_items_aggregate?: InputMaybe<Bucket_Item_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: item */
export type Item_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "item" */
export enum Item_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "item" */
export type Item_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Item_Stddev_Fields = {
  __typename?: 'item_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Item_Stddev_Pop_Fields = {
  __typename?: 'item_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Item_Stddev_Samp_Fields = {
  __typename?: 'item_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Item_Sum_Fields = {
  __typename?: 'item_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "item" */
export enum Item_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Item_Var_Pop_Fields = {
  __typename?: 'item_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Item_Var_Samp_Fields = {
  __typename?: 'item_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Item_Variance_Fields = {
  __typename?: 'item_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "bucket" */
  delete_bucket?: Maybe<Bucket_Mutation_Response>;
  /** delete single row from the table: "bucket" */
  delete_bucket_by_pk?: Maybe<Bucket>;
  /** delete data from the table: "bucket_item" */
  delete_bucket_item?: Maybe<Bucket_Item_Mutation_Response>;
  /** delete single row from the table: "bucket_item" */
  delete_bucket_item_by_pk?: Maybe<Bucket_Item>;
  /** delete data from the table: "item" */
  delete_item?: Maybe<Item_Mutation_Response>;
  /** delete single row from the table: "item" */
  delete_item_by_pk?: Maybe<Item>;
  /** insert data into the table: "bucket" */
  insert_bucket?: Maybe<Bucket_Mutation_Response>;
  /** insert data into the table: "bucket_item" */
  insert_bucket_item?: Maybe<Bucket_Item_Mutation_Response>;
  /** insert a single row into the table: "bucket_item" */
  insert_bucket_item_one?: Maybe<Bucket_Item>;
  /** insert a single row into the table: "bucket" */
  insert_bucket_one?: Maybe<Bucket>;
  /** insert data into the table: "item" */
  insert_item?: Maybe<Item_Mutation_Response>;
  /** insert a single row into the table: "item" */
  insert_item_one?: Maybe<Item>;
  /** update data of the table: "bucket" */
  update_bucket?: Maybe<Bucket_Mutation_Response>;
  /** update single row of the table: "bucket" */
  update_bucket_by_pk?: Maybe<Bucket>;
  /** update data of the table: "bucket_item" */
  update_bucket_item?: Maybe<Bucket_Item_Mutation_Response>;
  /** update single row of the table: "bucket_item" */
  update_bucket_item_by_pk?: Maybe<Bucket_Item>;
  /** update data of the table: "item" */
  update_item?: Maybe<Item_Mutation_Response>;
  /** update single row of the table: "item" */
  update_item_by_pk?: Maybe<Item>;
};


/** mutation root */
export type Mutation_RootDelete_BucketArgs = {
  where: Bucket_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bucket_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Bucket_ItemArgs = {
  where: Bucket_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bucket_Item_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ItemArgs = {
  where: Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Item_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_BucketArgs = {
  objects: Array<Bucket_Insert_Input>;
  on_conflict?: InputMaybe<Bucket_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bucket_ItemArgs = {
  objects: Array<Bucket_Item_Insert_Input>;
  on_conflict?: InputMaybe<Bucket_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bucket_Item_OneArgs = {
  object: Bucket_Item_Insert_Input;
  on_conflict?: InputMaybe<Bucket_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bucket_OneArgs = {
  object: Bucket_Insert_Input;
  on_conflict?: InputMaybe<Bucket_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ItemArgs = {
  objects: Array<Item_Insert_Input>;
  on_conflict?: InputMaybe<Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Item_OneArgs = {
  object: Item_Insert_Input;
  on_conflict?: InputMaybe<Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BucketArgs = {
  _inc?: InputMaybe<Bucket_Inc_Input>;
  _set?: InputMaybe<Bucket_Set_Input>;
  where: Bucket_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bucket_By_PkArgs = {
  _inc?: InputMaybe<Bucket_Inc_Input>;
  _set?: InputMaybe<Bucket_Set_Input>;
  pk_columns: Bucket_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Bucket_ItemArgs = {
  _inc?: InputMaybe<Bucket_Item_Inc_Input>;
  _set?: InputMaybe<Bucket_Item_Set_Input>;
  where: Bucket_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bucket_Item_By_PkArgs = {
  _inc?: InputMaybe<Bucket_Item_Inc_Input>;
  _set?: InputMaybe<Bucket_Item_Set_Input>;
  pk_columns: Bucket_Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ItemArgs = {
  _inc?: InputMaybe<Item_Inc_Input>;
  _set?: InputMaybe<Item_Set_Input>;
  where: Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Item_By_PkArgs = {
  _inc?: InputMaybe<Item_Inc_Input>;
  _set?: InputMaybe<Item_Set_Input>;
  pk_columns: Item_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "bucket" */
  bucket: Array<Bucket>;
  /** fetch aggregated fields from the table: "bucket" */
  bucket_aggregate: Bucket_Aggregate;
  /** fetch data from the table: "bucket" using primary key columns */
  bucket_by_pk?: Maybe<Bucket>;
  /** fetch data from the table: "bucket_item" */
  bucket_item: Array<Bucket_Item>;
  /** fetch aggregated fields from the table: "bucket_item" */
  bucket_item_aggregate: Bucket_Item_Aggregate;
  /** fetch data from the table: "bucket_item" using primary key columns */
  bucket_item_by_pk?: Maybe<Bucket_Item>;
  /** fetch data from the table: "item" */
  item: Array<Item>;
  /** fetch aggregated fields from the table: "item" */
  item_aggregate: Item_Aggregate;
  /** fetch data from the table: "item" using primary key columns */
  item_by_pk?: Maybe<Item>;
};


export type Query_RootBucketArgs = {
  distinct_on?: InputMaybe<Array<Bucket_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bucket_Order_By>>;
  where?: InputMaybe<Bucket_Bool_Exp>;
};


export type Query_RootBucket_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bucket_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bucket_Order_By>>;
  where?: InputMaybe<Bucket_Bool_Exp>;
};


export type Query_RootBucket_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootBucket_ItemArgs = {
  distinct_on?: InputMaybe<Array<Bucket_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bucket_Item_Order_By>>;
  where?: InputMaybe<Bucket_Item_Bool_Exp>;
};


export type Query_RootBucket_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bucket_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bucket_Item_Order_By>>;
  where?: InputMaybe<Bucket_Item_Bool_Exp>;
};


export type Query_RootBucket_Item_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootItemArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Query_RootItem_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Query_RootItem_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "bucket" */
  bucket: Array<Bucket>;
  /** fetch aggregated fields from the table: "bucket" */
  bucket_aggregate: Bucket_Aggregate;
  /** fetch data from the table: "bucket" using primary key columns */
  bucket_by_pk?: Maybe<Bucket>;
  /** fetch data from the table: "bucket_item" */
  bucket_item: Array<Bucket_Item>;
  /** fetch aggregated fields from the table: "bucket_item" */
  bucket_item_aggregate: Bucket_Item_Aggregate;
  /** fetch data from the table: "bucket_item" using primary key columns */
  bucket_item_by_pk?: Maybe<Bucket_Item>;
  /** fetch data from the table: "item" */
  item: Array<Item>;
  /** fetch aggregated fields from the table: "item" */
  item_aggregate: Item_Aggregate;
  /** fetch data from the table: "item" using primary key columns */
  item_by_pk?: Maybe<Item>;
};


export type Subscription_RootBucketArgs = {
  distinct_on?: InputMaybe<Array<Bucket_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bucket_Order_By>>;
  where?: InputMaybe<Bucket_Bool_Exp>;
};


export type Subscription_RootBucket_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bucket_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bucket_Order_By>>;
  where?: InputMaybe<Bucket_Bool_Exp>;
};


export type Subscription_RootBucket_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootBucket_ItemArgs = {
  distinct_on?: InputMaybe<Array<Bucket_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bucket_Item_Order_By>>;
  where?: InputMaybe<Bucket_Item_Bool_Exp>;
};


export type Subscription_RootBucket_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bucket_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bucket_Item_Order_By>>;
  where?: InputMaybe<Bucket_Item_Bool_Exp>;
};


export type Subscription_RootBucket_Item_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootItemArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Subscription_RootItem_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Subscription_RootItem_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type CreateBucketMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateBucketMutation = { __typename?: 'mutation_root', insert_bucket_one?: { __typename?: 'bucket', id: number } | null };

export type InsertBucketItemMutationVariables = Exact<{
  bucket_id: Scalars['Int'];
  item_id: Scalars['Int'];
}>;


export type InsertBucketItemMutation = { __typename?: 'mutation_root', insert_bucket_item_one?: { __typename?: 'bucket_item', id: number } | null };

export type CreateItemMutationVariables = Exact<{
  text?: InputMaybe<Scalars['String']>;
}>;


export type CreateItemMutation = { __typename?: 'mutation_root', insert_item_one?: { __typename?: 'item', id: number } | null };

export type GetBucketSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetBucketSubscription = { __typename?: 'subscription_root', bucket: Array<{ __typename?: 'bucket', id: number, items: Array<{ __typename?: 'bucket_item', id: number, item: { __typename?: 'item', text?: string | null, id: number } }> }> };

export type GetItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemsQuery = { __typename?: 'query_root', item: Array<{ __typename?: 'item', id: number }> };

export type GetItemsSubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetItemsSubscriptionSubscription = { __typename?: 'subscription_root', item: Array<{ __typename?: 'item', id: number, text?: string | null }> };

import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "query_root"
    },
    "mutationType": {
      "name": "mutation_root"
    },
    "subscriptionType": {
      "name": "subscription_root"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "bucket",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "bucket_item",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "items_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "bucket_item_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "bucket",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_avg_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_item",
        "fields": [
          {
            "name": "bucket",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "bucket",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "bucket_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "item",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "item",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "item_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_item_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "bucket_item",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_item_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_item_avg_fields",
        "fields": [
          {
            "name": "bucket_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "item_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_item_max_fields",
        "fields": [
          {
            "name": "bucket_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "item_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_item_min_fields",
        "fields": [
          {
            "name": "bucket_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "item_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_item_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "bucket_item",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_item_stddev_fields",
        "fields": [
          {
            "name": "bucket_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "item_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_item_stddev_pop_fields",
        "fields": [
          {
            "name": "bucket_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "item_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_item_stddev_samp_fields",
        "fields": [
          {
            "name": "bucket_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "item_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_item_sum_fields",
        "fields": [
          {
            "name": "bucket_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "item_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_item_var_pop_fields",
        "fields": [
          {
            "name": "bucket_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "item_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_item_var_samp_fields",
        "fields": [
          {
            "name": "bucket_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "item_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_item_variance_fields",
        "fields": [
          {
            "name": "bucket_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "item_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "bucket",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_stddev_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_stddev_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_stddev_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_sum_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_var_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_var_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "bucket_variance_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "item",
        "fields": [
          {
            "name": "bucket_items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "bucket_item",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "bucket_items_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "bucket_item_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "text",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "item_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "item_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "item",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "item_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "item_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "item_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "item_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "item_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "item_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "item_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "item_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "item_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "item_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "item_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "item_avg_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "item_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "text",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "item_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "text",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "item_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "item",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "item_stddev_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "item_stddev_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "item_stddev_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "item_sum_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "item_var_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "item_var_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "item_variance_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "mutation_root",
        "fields": [
          {
            "name": "delete_bucket",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_bucket_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "bucket",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_bucket_item",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_bucket_item_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_item",
            "type": {
              "kind": "OBJECT",
              "name": "item_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_item_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "item",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insert_bucket",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_bucket_item",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_bucket_item_one",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_bucket_one",
            "type": {
              "kind": "OBJECT",
              "name": "bucket",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_item",
            "type": {
              "kind": "OBJECT",
              "name": "item_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_item_one",
            "type": {
              "kind": "OBJECT",
              "name": "item",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "update_bucket",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_bucket_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "bucket",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_bucket_item",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_bucket_item_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_item",
            "type": {
              "kind": "OBJECT",
              "name": "item_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_item_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "item",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "query_root",
        "fields": [
          {
            "name": "bucket",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "bucket",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "bucket_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "bucket_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "bucket_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "bucket",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "bucket_item",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "bucket_item",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "bucket_item_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "bucket_item_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "bucket_item_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "item",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "item",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "item_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "item_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "item_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "item",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "subscription_root",
        "fields": [
          {
            "name": "bucket",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "bucket",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "bucket_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "bucket_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "bucket_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "bucket",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "bucket_item",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "bucket_item",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "bucket_item_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "bucket_item_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "bucket_item_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "bucket_item",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "item",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "item",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "item_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "item_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "item_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "item",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;

export const CreateBucketDocument = gql`
    mutation CreateBucket {
  insert_bucket_one(object: {}) {
    id
  }
}
    `;

export function useCreateBucketMutation() {
  return Urql.useMutation<CreateBucketMutation, CreateBucketMutationVariables>(CreateBucketDocument);
};
export const InsertBucketItemDocument = gql`
    mutation InsertBucketItem($bucket_id: Int!, $item_id: Int!) {
  insert_bucket_item_one(
    object: {bucket_id: $bucket_id, item_id: $item_id}
    on_conflict: {constraint: bucket_item_pkey, update_columns: updated_at}
  ) {
    id
  }
}
    `;

export function useInsertBucketItemMutation() {
  return Urql.useMutation<InsertBucketItemMutation, InsertBucketItemMutationVariables>(InsertBucketItemDocument);
};
export const CreateItemDocument = gql`
    mutation CreateItem($text: String) {
  insert_item_one(object: {text: $text}) {
    id
  }
}
    `;

export function useCreateItemMutation() {
  return Urql.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument);
};
export const GetBucketDocument = gql`
    subscription GetBucket {
  bucket {
    id
    items {
      id
      item {
        text
        id
      }
    }
  }
}
    `;

export function useGetBucketSubscription<TData = GetBucketSubscription>(options: Omit<Urql.UseSubscriptionArgs<GetBucketSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<GetBucketSubscription, TData>) {
  return Urql.useSubscription<GetBucketSubscription, TData, GetBucketSubscriptionVariables>({ query: GetBucketDocument, ...options }, handler);
};
export const GetItemsDocument = gql`
    query GetItems {
  item {
    id
  }
}
    `;

export function useGetItemsQuery(options?: Omit<Urql.UseQueryArgs<GetItemsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetItemsQuery>({ query: GetItemsDocument, ...options });
};
export const GetItemsSubscriptionDocument = gql`
    subscription GetItemsSubscription {
  item {
    id
    text
  }
}
    `;

export function useGetItemsSubscriptionSubscription<TData = GetItemsSubscriptionSubscription>(options: Omit<Urql.UseSubscriptionArgs<GetItemsSubscriptionSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<GetItemsSubscriptionSubscription, TData>) {
  return Urql.useSubscription<GetItemsSubscriptionSubscription, TData, GetItemsSubscriptionSubscriptionVariables>({ query: GetItemsSubscriptionDocument, ...options }, handler);
};