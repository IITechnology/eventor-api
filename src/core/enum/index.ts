export enum RoleType {
    LIFTER = 'lifter',
    CLIENT = 'client',
    ADMIN  = 'admin'
}

export enum Industry_Category {
    RED = 'red',
    YELLOW = 'yellow',
    GREEN  = 'green'
}

export enum Security_Deposit {
    PENDING = 'pending',
    COMPLETED  = 'completed'
}

export enum Membership_Status {
    ACTIVE = 'active',
    INACTIVE  = 'inactive'
}
export enum Publish {
    ACTIVE = 1,
    INACTIVE  = 0
}
export enum GenderType {
    MALE = 'male',
    FEMALE  = 'female',
    TRANSGENDER  = 'transgender'
}

export enum Effluent_Type {
    ELECTROPLATING = 'electroplating',
    PICKLING  = 'pickling',
    WASHING  =  'washing'
}

export enum SR_Status {
    PENDING = 'pending',
    COMPLETED  = 'completed',
    INPROGRESS  = 'inprogress',
    ASSIGN  = 'assign',
    CANCELLED = 'cancelled'
}

export enum SampleCollectorType {
    FLUID = 'fluid',
    SOLID  = 'solid',
    SEMISOLID  = 'semi-solid'
}

export enum CategoryIcon {
    icon = 'icon',
    image  = 'image',
}

export enum TRANSACTION_STATUS {
    PENDING = "pending",
    COMPLETED = "completed",
    INPROGRESS = "inprogress",
    CANCELLED = "cancelled",
    REJECTED = "rejected"
  }
  
  export enum TRANSACTION_MODE {
    UPI = "upi",
    internet = "internet",
    card = "card",
    wallet = "wallet",
    bankToWallet = "bankToWallet",
  }
  
  export enum TRANSACTION_TYPE {
    CREDIT = "credit",
    DEBIT = "debit",
  }
  